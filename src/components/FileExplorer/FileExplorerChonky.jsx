import React, { useState } from 'react';
import { setChonkyDefaults, FullFileBrowser, ChonkyActions } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';
import ReactPlayer from 'react-player';
import { Img } from 'react-image';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'; // Import MUI Dialog

// Import the local image for thumbnail usage
import JEGIMage from '../../mock-files/Pictures/jeg.png'; // Adjust this path to the actual image location

// Set Chonky's default icon component
setChonkyDefaults({ iconComponent: ChonkyIconFA });


// Mock folder and file structure
const mockFiles = [
    {
        id: 'documents',
        name: 'Documents',
        isDir: true,
        children: [
            { id: '1', name: '1.txt', isDir: false },
            { id: '2', name: '2.txt', isDir: false },
        ],
    },
    {
        id: 'downloads',
        name: 'Downloads',
        isDir: true,
        children: [
            { id: '3', name: '1.pptx', isDir: false },
            { id: '4', name: '2.pptx', isDir: false },
        ],
    },
    {
        id: 'pictures',
        name: 'Pictures',
        isDir: true,
        thumbnailUrl: JEGIMage,
        children: [
            {
                id: '5',
                name: 'jeg.png',
                isDir: false,
                thumbnailUrl: JEGIMage,
            },
        ],
    },
    {
        id: 'videos',
        name: 'Videos',
        isDir: true,
        children: [{ id: '6', name: 'ANIMATIE_GIF.webm', isDir: false }],
    },
];

// Helper function to find a folder by its ID
const findFolderById = (folderId) => {
    return mockFiles.find((folder) => folder.id === folderId);
};

const FileExplorerChonky = () => {
    const [folderChain, setFolderChain] = useState([{ id: 'root', name: 'Root', isDir: true }]);
    const [currentFiles, setCurrentFiles] = useState(mockFiles);
    const [selectedFile, setSelectedFile] = useState(null); // File selected for preview
    const [isModalOpen, setIsModalOpen] = useState(false);  // Modal visibility state

    const handleFileAction = (data) => {
        const { action, payload } = data;
        if (action.id === ChonkyActions.OpenFiles.id && payload.files.length > 0) {
            const fileToOpen = payload.files[0];
            if (fileToOpen.isDir) {
                const newFolder = findFolderById(fileToOpen.id);
                if (newFolder) {
                    setFolderChain([...folderChain, newFolder]);
                    setCurrentFiles(newFolder.children);
                }
            } else {
                // Set the file and open modal for preview
                setSelectedFile(fileToOpen);
                setIsModalOpen(true); // Open the modal
            }
        } else if (action.id === ChonkyActions.OpenParentFolder.id) {
            if (folderChain.length > 1) {
                const newFolderChain = folderChain.slice(0, -1);
                const parentFolder = findFolderById(newFolderChain[newFolderChain.length - 1].id);
                setFolderChain(newFolderChain);
                setCurrentFiles(parentFolder ? parentFolder.children : mockFiles);
                setSelectedFile(null);
            }
        }
    };

    return (
        <div>
            {/* File Explorer */}
            <div style={{ height: '500px', marginTop: '100px', paddingTop: '50px' }}>
                <FullFileBrowser
                    files={currentFiles}
                    folderChain={folderChain}
                    fileActions={[ChonkyActions.OpenFiles, ChonkyActions.OpenParentFolder]}
                    onFileAction={handleFileAction}
                />
            </div>

            {/* File Preview Modal using MUI Dialog */}
            <Dialog
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                maxWidth="md"
                fullWidth={true}
            >
                <DialogTitle>{selectedFile ? selectedFile.name : 'File Preview'}</DialogTitle>
                <DialogContent
                    style={{
                        maxHeight: '80vh',
                        overflow: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    {selectedFile && !selectedFile.isDir && (
                        <div className="space-y-6">
                            {/* Preview PNG */}
                            {selectedFile.name.endsWith('.png') && (
                                <Img
                                    src={selectedFile.thumbnailUrl}
                                    alt={selectedFile.name}
                                    style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain' }}
                                />
                            )}

                            {/* Preview WEBM Video */}
                            {selectedFile.name.endsWith('.webm') && (
                                <ReactPlayer url={selectedFile.thumbnailUrl} controls width="100%" height="100%" />
                            )}

                            {/* Preview PDF */}
                            {selectedFile.name.endsWith('.pdf') && (
                                <div style={{ height: '400px' }}>
                                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
                                        <Viewer fileUrl={selectedFile.thumbnailUrl} />
                                    </Worker>
                                </div>
                            )}
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsModalOpen(false)} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FileExplorerChonky;

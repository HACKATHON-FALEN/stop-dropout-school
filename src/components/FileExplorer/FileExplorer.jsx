import { FileManager } from "@cubone/react-file-manager";
import { useState } from "react";

import "@cubone/react-file-manager/dist/style.css";
import * as React from 'react';

function FileExplorer() {

    const [files, setFiles] = useState([
        {
            name: "Documents",
            isDirectory: true, // Folder
            path: "/Documents", // Located in Root directory
            updatedAt: "2024-09-09T10:30:00Z", // Last updated time
        },
        {
            name: "1.txt",
            isDirectory: false, // File
            path: "/Documents/1.txt", // Inside Documents folder
            updatedAt: "2024-09-09T11:00:00Z",
            size: 1024, // 1 KB
        },
        {
            name: "2.txt",
            isDirectory: false, // File
            path: "/Documents/2.txt", // Inside Documents folder
            updatedAt: "2024-09-09T11:05:00Z",
            size: 2048, // 2 KB
        },
        {
            name: "Downloads",
            isDirectory: true, // Folder
            path: "/Downloads", // Located in Root directory
            updatedAt: "2024-09-09T11:10:00Z",
        },
        {
            name: "1.pptx",
            isDirectory: false, // File
            path: "/Downloads/1.pptx", // Inside Downloads folder
            updatedAt: "2024-09-09T11:15:00Z",
            size: 3072, // 3 KB
        },
        {
            name: "2.pptx",
            isDirectory: false, // File
            path: "/Downloads/2.pptx", // Inside Downloads folder
            updatedAt: "2024-09-09T11:20:00Z",
            size: 4096, // 4 KB
        },
        {
            name: "Pictures",
            isDirectory: true, // Folder
            path: "/Pictures", // Located in Root directory
            updatedAt: "2024-09-09T11:25:00Z",
        },
        {
            name: "ALIN.png",
            isDirectory: false, // File
            path: "/Pictures/ALIN.png", // Inside Pictures folder
            updatedAt: "2024-09-08T16:45:00Z",
            size: 5120, // 5 KB
        },
        {
            name: "Videos",
            isDirectory: true, // Folder
            path: "/Videos", // Located in Root directory
            updatedAt: "2024-09-09T11:30:00Z",
        },
        {
            name: "ANIMATIE_GIF.webm",
            isDirectory: false, // File
            path: "/Videos/ANIMATIE_GIF.webm", // Inside Videos folder
            updatedAt: "2024-09-08T16:45:00Z",
            size: 10240, // 10 KB
        },
    ]);

    return (
        <div style={{ marginTop: '100px', paddingTop: '50px' }}>
            <FileManager files={files} />
        </div>
    );
}

export default FileExplorer;

const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');
app.use(cors());

// Middleware to parse JSON body
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'mock-files')));

// Handle POST request for FileOperations
app.post('/api/FileOperations', (req, res) => {
    const filePath = req.body.path || ''; // Handle path from req.body
    const fullPath = path.join(__dirname, 'mock-files', filePath);

    fs.readdir(fullPath, (err, files) => {
        if (err) {
            return res.status(404).json({ error: `Directory not found: ${filePath}` });
        }

        const fileDetails = files.map(file => {
            const isFile = fs.statSync(path.join(fullPath, file)).isFile();
            return {
                name: file,
                isFile: isFile,
                size: isFile ? fs.statSync(path.join(fullPath, file)).size : 0,
                dateModified: fs.statSync(path.join(fullPath, file)).mtime.toISOString(),
                hasChild: !isFile && fs.readdirSync(path.join(fullPath, file)).length > 0,
                filterPath: `${filePath}/`
            };
        });

        res.json({
            cwd: {
                name: path.basename(fullPath),
                size: 0,
                dateModified: new Date().toISOString(),
                isFile: false,
                hasChild: true,
                filterPath: `/${filePath}/`
            },
            files: fileDetails,
            error: null
        });
    });
});


app.get('/api/GetImage', (req, res) => {
    const filePath = req.query.path;
    const fullPath = path.join(__dirname, 'mock-files', filePath);
    res.sendFile(fullPath);
});

app.get('/api/Download', (req, res) => {
    const filePath = req.query.path;
    const fullPath = path.join(__dirname, 'mock-files', filePath);
    res.download(fullPath);
});

app.post('/api/Upload', (req, res) => {
    const uploadDir = path.join(__dirname, 'mock-files', req.body.destination);
    fs.mkdirSync(uploadDir, { recursive: true });
    const tempPath = path.join(__dirname, 'temp-uploads', req.files.file.name);
    fs.renameSync(tempPath, path.join(uploadDir, req.files.file.name));
    res.send({ success: true, fileName: req.files.file.name });
});

app.listen(4000, () => console.log('Mock server running on port 4000'));

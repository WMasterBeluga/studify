/** TO-DO: 
 * General idea to get around server file upload size limitations:
 *    - Solve: file upload
 *    - Summarize: YouTube link
 *    - Study: file upload
 * 
 * For file upload: 
 *    - https://www.youtube.com/watch?v=l5akQHDcYIU
 * **/


// // FOR GPT
// import OpenAI from "openai";
// import dotenv from "dotenv";
// import express from "express";
// import cors from 'cors';

// dotenv.config();

// const openai = new OpenAI({
//     organization: "org-qcMPH8k9jEHlckFQ0IZGLhtH",
//     project: "proj_AI75RtGz1GCICKxirda5E7Qw",
//     apiKey: process.env.OPENAI_API_KEY!,
// });

// const app = express();
// const port = 3080;
// app.use(cors({ origin: 'http://localhost:3000' }));

// app.post('/', async (req, res) => {
//     try {
//         const response = await openai.chat.completions.create({
//             model: 'gpt-4o',
//             messages: [{ role: 'user', content: 'Which mechanical keyboard is the best?' }],
//         });
//         console.log(response.choices[0].message.content);
//         res.json({
//             data: response.choices[0].message.content,
//         });
//     } catch (error) {
//         console.error("Error creating chat completion:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });








// const express = require('express');
// const multer = require('multer');
// const cors = require('cors');

// const app = express();
// app.use(cors({ origin: 'http://localhost:3000' }));

// const upload = multer({ dest: '/' });

// app.post('/api/upload', upload.single('file'), (req: Express.Request, res: any) => {
//   console.log(req.file);
//   res.status(200).json({ message: 'File uploaded successfully' });
// });app.listen(3080, () => console.log('Server running on port 3080'));
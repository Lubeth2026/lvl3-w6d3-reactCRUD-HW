# React Student Directory App
Live URL: "https://github.com/Lubeth2026/lvl3-w6d3-reactCRUD-HW.git"

## Overview
This project is a React CRUD app connected to Supabase.
The app allows users to: 
- View all students
- Add anew student 
- Update existing student info
- Delete students from the directory
The student data is stored in a Supabase database table called Directory.

### Features
CREATE:  Users can add a new student using a controlled form.
READ:  Student data is fetched from Supabase & displayed on the page.
UPDATE: Users can edit a student's info & save changes.
DELETE:  Users can remove a student from the directory.

#### How to Test CRUD Features
Test CREATE
- Fill out form
- Click "Add Student"
- New student should appear on the page
Test READ
- Existing students should display automatically when the app loads
Test UPDATE
- Click the "Edit" button
- Update student info in the form
- Click "Update Student"
- Student info should update on the page
Test DELETE
- Click the "X" button
- Student should be removed from the page & database

##### Installation
1. Install Dependencies
npm install
2. Start the server
npm run dev

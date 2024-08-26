# File System Organizer

## Description

The File System Organizer is a global command-line tool built on Node.js. It helps you manage unorganized files within a directory by categorizing them into specific folders based on their file extensions. This tool simplifies file management and helps keep your directories tidy and well-organized.

## Features

- **help**: Displays a list of all available commands and their functions.
- **organize**: Organizes the files within a specified directory.
  - **Working**: Takes a directory path, checks all files and their extensions, creates a new directory for organization, and categorizes files into subdirectories based on their type. Each file is then moved to its respective directory.
- **tree**: Displays the complete structure of directories and subdirectories.
  - **Working**: Takes a directory path and shows the entire hierarchical structure of the directory, including subdirectories and files within them.

## Installation

To get started with the File System Organizer, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/username/file-system-organizer.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd file-system-organizer
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Make the Tool Global**:

    - Ensure the shebang syntax is included at the top of your `main.js` file:
        ```javascript
        #!/usr/bin/env node
        ```

    - Update your `package.json` file to include the following `bin` configuration:
        ```json
        "bin": {
            "fso": "main.js"
        }
        ```

    - Create a symbolic link globally on your system:
        ```bash
        npm link
        ```

## Usage

After installing and linking globally, you can use the tool with the following commands:

- **Help**: Display available commands.
    ```bash
    fso help
    ```
    Example output:
    ```
    [ 'help' ]
    List of all commands:
    1. help
    2. tree "Path of the directory"
    3. organize "Path of the directory"
    ```

- **Organize**: Organize files within a specified directory.
    ```bash
    fso organize F:\\def\\ghi\\etc
    ```
    Example output:
    ```
    CSS - My Site Images.zip belongs to category: archives
    CSS - My Site Images.zip copied to: archives
    diamond.png belongs to category: media
    diamond.png copied to: media
    google-plus.png belongs to category: media
    google-plus.png copied to: media
    hibernate-release-5.2.15.Final.zip belongs to category: archives
    hibernate-release-5.2.15.Final.zip copied to: archives
    jre-8u411-windows-i586.exe belongs to category: app
    jre-8u411-windows-i586.exe copied to: app
    Kingdom of Heaven 2005 Directors Cut.720p.BrRip.x264.YIFY.mp4 belongs to category: media
    Kingdom of Heaven 2005 Directors Cut.720p.BrRip.x264.YIFY.mp4 copied to: media
    lecture_note_470507181046590.pdf belongs to category: documents
    lecture_note_470507181046590.pdf copied to: documents
    node-v14.17.0-x64.msi belongs to category: others
    node-v14.17.0-x64.msi copied to: others
    ```

- **Tree**: Show the hierarchical structure of a directory.
    ```bash
    fso tree F:\\def\\ghi\\etc
    ```
    Example output:
    ```
     |--> etc
         |--> Organized
                 |--> app
                     |-- jre-8u411-windows-i586.exe
                 |--> archives
                     |-- CSS - My Site Images.zip
                     |-- hibernate-release-5.2.15.Final.zip
                 |--> documents
                     |-- lecture_note_470507181046590.pdf
                 |--> media
                     |-- diamond.png
                     |-- google-plus.png
                     |-- Kingdom of Heaven 2005 Directors Cut.720p.BrRip.x264.YIFY.mp4
                 |--> others
                     |-- node-v14.17.0-x64.msi
    ```

## Configuration

No additional configuration is required. Simply run the commands as described above.
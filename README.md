# HealMate

## Getting Started

1. **No need to fork the repository**

2. **Clone the repository**: You don't have to fork it, simply clone the repo.
   ```
   git clone https://github.com/IndranjanaChatterjee/HealMate.git
   ```

3. **Install Dependencies**: Ensure you have Node.js and npm installed. Then, navigate to the frontend project directory and run:
   ```bash
   cd frontend
   npm install
   ```

4. **Start the Frontend**: Kick-start your development environment by running the following in the `frontend` directory:
   ```bash
   npm run dev
   ```

## Key Technologies

- Frontend
    - ReactJS
    - TailwindCSS
    - VanillaCSS
    - Figma for design
- Backend
    - Python (Flask)
    - MongoDB
    - Gemini Pro API
    - Gemini Pro Vision

## Contributing Guidelines

1. **Pull the changes**: Always pull the changes so that your local codebase is always updated and there is no conflict when you're pushing the code.
```bash
git checkout main
git fetch -p
git pull
```

2. **Create a New Branch**: Do not make changes directly in the main branch. Instead create a branch to do your work. The branch name should be like `task-dev_name`. For example, if your name is John and you are assigned to do the footer, the branch name will be `footer-john`. Use the following command to create the branch.
   ```
   git checkout -b <your-branch-name>
   ```
3. **Check which branch you are in before committing**: Just to be safe that you are making changes in your own branch, check which branch you are in before committing the changes.
   ```
    git branch   
   ```

3. **Make Changes and Commit**: Create the codebase, make the necessary changes, and commit your changes regularly.
   ```
   git add .
   git commit -m "<commit-message>"
   ```

4. **Push Your Branch**: Push the changes to the branch.
   ```
   git push -u origin <your-branch-name> --force
   ```

5. **Submit a Pull Request**: Create a pull request to merge your changes into the main repository. Provide a clear and concise description of your changes to help reviewers understand your contribution.


## Support and Feedback

If you encounter any issues or have questions, feel free to open an issue on the GitHub repository.

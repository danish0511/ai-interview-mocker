## 🤸 Quick Start
Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

* [Git](https://www.git-scm.com/)
* [Node.js](https://nodejs.org/en)
* [npm](https://www.npmjs.com/) (Node Package Manager)

#### Cloning the Repository
```
https://github.com/danish0511/ai-interview-mocker.git
cd ai-interview-mocker
```

#### Installation

Install the project dependencies using npm:
```
npm install
```

#### Set Up Environment Variables

Create a new file named ```.env``` in the root of your project and add the following content:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_DRIZZLE_DB_URL=
NEXT_PUBLIC_GEMINI_API_KEY=
NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=
NEXT_PUBLIC_INFORMATION=
NEXT_PUBLIC_QUESTION_NOTE=
```

#### Running the project
```
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

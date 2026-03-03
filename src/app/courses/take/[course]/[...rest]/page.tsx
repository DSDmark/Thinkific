 "use client";

import SignInPage from "@/app/users/sign_in/page";

interface Props {
  params: {
    course: string;
    rest: string[];
  };
}

export default function GenericProtectedLessonPage(_props: Props) {
  // For any lesson routes we haven't rebuilt yet, reuse the sign-in experience.
  return <SignInPage />;
}


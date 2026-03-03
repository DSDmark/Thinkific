 "use client";

import SignInPage from "@/app/users/sign_in/page";

interface Props {
  params: {
    slug: string;
  };
}

export default function EqPopupProtectedTextPage(_props: Props) {
  // The real platform gates POP-UP Festival course texts behind sign in.
  // Here we simply reuse the sign in page for any protected text slug.
  return <SignInPage />;
}


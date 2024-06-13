import supabase from "./supabase";

export async function signIn() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:5173",
      // redirectTo: "https://devko-renewal-git-main-tidyps-projects.vercel.app/",
    },
  });

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut({
    options: {
      redirectTo: "http://localhost:5173",
      // redirectTo: "https://devko-renewal-git-main-tidyps-projects.vercel.app/",
    },
  });
}

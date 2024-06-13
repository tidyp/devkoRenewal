import supabase from "./supabase";

export async function getData() {
  const { data: testTable, error } = await supabase
    .from("testTable")
    .select("*");
  console.log(testTable);
  return testTable;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut({
    options: {
      redirectTo: "http://localhost:5173",
      // redirectTo: "https://devko-renewal-git-main-tidyps-projects.vercel.app/",
    },
  });
}

export async function getPoptags() {
  const { data, error } = await supabase.from("poptags").select("*");

  if (error) {
    console.error(error);
    throw new Error("Tags not found");
  }

  return data;
}
export async function getTopWriters() {
  const { data, error } = await supabase.from("topwriters").select("*");

  if (error) {
    console.error(error);
    throw new Error("Tags not found");
  }

  return data;
}

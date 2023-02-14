import { createPage } from "../models/create-browser";

export async function getStatusGame() {
  const page = await createPage("https://gamestatus.info/hogwarts-legacy?lg=en");

  try {
    //search and get status
    const element = await page.waitForSelector(".game-info-def-text");
    const value = await page.evaluate((el) => el?.textContent, element);
    page.close();
    if (value !== "Not Cracked" && typeof value === "string") {
      return true;
    }
    return false;
  } catch (error) {
    throw new Error("algo salió mal, vuelve a intentar");
  }
}

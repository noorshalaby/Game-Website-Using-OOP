import { Ui } from "./ui.js";

export class Details {
  constructor(id) {
    document.getElementById("btnClose").addEventListener("click", () => {
      document.getElementById("details").classList.add("d-none");
      document.getElementById("games").classList.remove("d-none");
    });
    this.loading = document.querySelector(".loading");
    this.getDetails(id);
  }

  async getDetails(id) {
    this.loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e00d7ae21cmsh89dc07318c1e6d0p1836f2jsndc788fdb6de8",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const apiDetails = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const response = await apiDetails.json();
    this.loading.classList.add("d-none");
    new Ui().displayDetails(response);
  }
}

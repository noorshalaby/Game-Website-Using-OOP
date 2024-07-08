// * Home Page Class
import { Ui } from "./ui.js";
import { Details } from "./details.js";

export class Games {
  constructor() {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.changeActiveLink(link);
        const category = link.getAttribute("data-category");
        this.getData(category);
      });
    });
    this.loading = document.querySelector(".loading");
    this.details = document.getElementById("details");
    this.games = document.getElementById("games");
    this.ui = new Ui();
    this.getData("mmorpg");
  }

  //   ^ Change Active link fn
  changeActiveLink(link) {
    document.querySelector("ul .active").classList.remove("active");
    link.classList.add("active");
  }

  //  ! Get Data From API
  async getData(category) {
    this.loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e00d7ae21cmsh89dc07318c1e6d0p1836f2jsndc788fdb6de8",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const response = await api.json();
    this.loading.classList.add("d-none");
    this.ui.displayGames(response);
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        this.details.classList.remove("d-none");
        this.games.classList.add("d-none");
        new Details(card.getAttribute("data-id"));
      });
    });
  }
}

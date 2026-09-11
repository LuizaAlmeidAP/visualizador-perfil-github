import { fetchGitHubUser, fetchGitHubUserRepos } from "./githubAPI.js";
import { displayUserProfile } from "./profileView.js";

const usernameInput = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");


async function getUserProfile() {
    const username = usernameInput.value;

    if (!username) {
        alert("Por favor, digite um nome de usuário do GitHub.");
        profileResults.innerHTML = "";
        return;
    }

    profileResults.innerHTML = "<p class='loading'>Carregando...</p>";
    try {


        const userData = await fetchGitHubUser(username);
        const userRepos = await fetchGitHubUserRepos(username);
        displayUserProfile(userData, userRepos, profileResults);
    }
    catch (error) {
        console.error("Erro ao buscar informações do usuário:", error);
        alert("Ocorreu um erro ao buscar informações do usuário. Por favor, tente novamente mais tarde.");
        profileResults.innerHTML = "";
    }


};

btnSearch.addEventListener("click", getUserProfile);

usernameInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        getUserProfile();
    }
});



const BASE_URL = "https://api.github.com/users";
const usernameInput = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

btnSearch.addEventListener("click", async () => {
    const username = usernameInput.value;
    if (username) {

        profileResults.innerHTML = "<p class='loading'>Carregando...</p>";
        try {
            const response = await fetch(`${BASE_URL}/${username}`);
            if (!response.ok) {
                alert("Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.");
                profileResults.innerHTML = "";
                return;
            }

            const userData = await response.json();
            console.log(userData); //confirmar q esta funcionando
            profileResults.innerHTML = `
                <div class="profile-card">
                    <img src="${userData.avatar_url}" alt="${userData.name}" class="profile-avatar">
                    <div class="profile-info">
                        <h2>${userData.name}</h2>
                        <p>${userData.bio || "Não possui bio cadastrada 😢."}</p>

                    </div>
                </div>`
        }
        catch (error) {
            console.error("Erro ao buscar informações do usuário:", error);
            alert("Ocorreu um erro ao buscar informações do usuário. Por favor, tente novamente mais tarde.");
            profileResults.innerHTML = "";
        }
    }
    else {
        alert("Por favor, digite um nome de usuário do GitHub.");
    }
});



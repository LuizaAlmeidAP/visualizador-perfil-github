const BaseUrl = "https://api.github.com/users";

export async function fetchGitHubUser(username) {
    const userData = await fetch(`${BaseUrl}/${username}`);
    if (!userData.ok) {
        throw new Error("Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.");
    }
    return await userData.json();
}

export async function fetchGitHubUserRepos(username) {
    const respositories = await fetch(`${BaseUrl}/${username}/repos?per_page=10&sort=created`);
    if (!respositories.ok) {
        throw new Error("Repositórios não encontrados. ");
    }
    return await respositories.json();
}

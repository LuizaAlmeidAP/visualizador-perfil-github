

export async function fetchGitHubUser(username) {
    const BaseUrl = "https://api.github.com/users";
    const response = await fetch(`${BaseUrl}/${username}`);
    if (!response.ok) {
        throw new Error("Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.");
    }
    return await response.json();
}

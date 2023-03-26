
export const dispatchData = async (url, data, {loading}) => {

    // Добавляем созданному элементу preloader
    document.querySelector('.status').textContent = loading;
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }})
        return await res.json();
}

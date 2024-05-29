export async function postRequest(url, data) {

    const response = await fetch(url, {
        method: 'POST',
        // credentials: 'include',
        headers: {
            'Content-type': 'application/text',
            'Cookie': 'cl_b=4|9882a286b856e86e66f52cd15dd40cfcb02cc222|1716220936zjSvM; cl_def_hp=sarasota; cl_chat=%7B%22displayState%22%3A%22none%22%2C%22filter%22%3A%22allActive%22%2C%22searchFilter%22%3A%22%22%2C%22orderer%22%3A%22recent%22%2C%22ordererDirection%22%3A%22ascending%22%2C%22dismissedMessageIds%22%3A%22%22%7D; cl_session=LPolkdEm3aNVX3KI4Te3c34ady0qSy0kRgfXJgb8GWX4domXcye9iyavHi8Gcmd3; cl_login=393001072%3Ajarrodschilling%40gmail.com',
            'Referer': 'https://sarasota.craigslist.org/',
            'Origin': 'https://sarasota.craigslist.org',
        },
        body: `favesToAdd=${data}`
    })
    const resData = await response.json()

    return resData
}
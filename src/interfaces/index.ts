

interface Song {
    id: number,
    duration: number,
    title: string,
    album: Album
    artist: Artist
}


 interface Album {
    cover_medium: string
    title: string
}


interface Artist {
    name: string
}

export default Song


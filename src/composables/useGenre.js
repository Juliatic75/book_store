export function useGenre () {
  const genres = [
    { key: 'Роман', value: 'novel' },
    { key: 'Детектив', value: 'detective' },
  ]

  const getGenreLabel = (genre) => {
    return genres.find(item => item.value === genre)?.key ?? ''
  }

  return {
    getGenreLabel
  }
}

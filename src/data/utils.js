const getCategory = (post) => {
  if(post.category){
    return post.category.name;
  }
  return 'Nessuna categoria'
}

const getTags = (post) => {
  if(post.tags.length){
    return post.tags.map(tag => tag.name).join(', ');
  }
  return 'Nessun tag';
}

const formatData = (date) => {
  return new Date(date).toLocaleDateString()
}

export { getCategory, getTags, formatData }
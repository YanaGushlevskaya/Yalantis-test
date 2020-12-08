export default function formatDate(date, options) {
  let formatedDate;

  const day = new Date(date).toLocaleString('default', {day: 'numeric'});
  const month = new Date(date).toLocaleString('default', {month: 'long'});
  const year = new Date(date).toLocaleString('default', {year: 'numeric'});

  if(options === 'longMonth') {
    formatedDate = month;
  } else if(options === 'fullDate') {
    formatedDate = `${day} ${month}, ${year} year`
  }

  return formatedDate;
}
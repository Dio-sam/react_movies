import moment from 'moment';


export default{
   MESSAGE:"It doesn't have more movies",
   MSG:"My list is empty",
   TODAY:moment().format('GGGG-MM-DD'),
   NEXT_WEEK:moment().add(7, 'days').format('GGGG-MM-DD'),
   API_KEY:'2396dc7a5b886d921e033a6f87d94ad4'
}
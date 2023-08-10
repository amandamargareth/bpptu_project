import pesan from pesan.html

var pesan =require('./template.html');

class Index extends React.Component {
   render(){
      return (
         <iframe src={pesan }></iframe>   /* like this */
      );
   }
}
export default Index;





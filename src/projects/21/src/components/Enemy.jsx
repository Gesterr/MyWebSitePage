import classes from '../App.module.css'

export default function Enemy({enemyTabel}) {
  
    function bgCard(tabel){
      let check = 'url(../src/img/cards/' + tabel.trim() + '.png)';
      return check;
    }
    


  return (
    <>
    <div className={classes.Enemytabel} htmlFor="">
      {
      enemyTabel.map((tabel) => 
        <div style={{background:bgCard(tabel),
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',}}
          className={classes.Card}
         key={tabel} id={tabel}>
          
        </div>
      )
      }
      </div>
    </>
  )
}

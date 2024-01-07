import { useEffect, useState } from 'react'
import './admin.scss'
import { showUsers } from '../../utils/api'
import { deleteUser } from '../../utils/api'
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';


export const Admin = ({users, setUsers}) =>{
  
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [noSearch, setNoSearch] = useState("");


const navigate = useNavigate()

useEffect(()=>{
  showUsers().then((result)=>{
    setUsers(result.data);
  })
},[setUsers]
)



const deleteUserInfo = async (_id) => {
  try {
      await deleteUser(_id);
      const newUsewsList = users.filter(f => f._id !== _id)
      setUsers(newUsewsList);
  } 
  catch (err) { 
    console.log(err)
  }
}


useEffect(() => {
  const filteredData = users.filter((f) => {
    return Object.values(f)
      .join("")
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });
  filteredData.includes(searchInput.toLowerCase());
  setFilteredResults(filteredData);
}, [users, searchInput]);



const options = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
};

const setSortUsers = (sortWay) => {
  switch(sortWay) {
  case "Сначала новые":
      const sortNew = users.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    setUsers([...sortNew]);
    break;
  case "Сначала стырые":
    const sortOld = users.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    setUsers([...sortOld]);
      break;
      default:
  }
};

const users_sorted = [{ id: 'Сначала новые' },  { id: 'Сначала стырые' }]



useEffect(()=>{
  if (filteredResults.length === 0 && searchInput !== '') 
    setNoSearch('Ничего не найдено');
    else setNoSearch('')

}, [searchInput, filteredResults])

  return(
    <>
      { users?.length !== 0 ? 
      
      (
      <div className='table__container'>
        
        <input 
        className='search__input'
        value={searchInput} 
        placeholder='Поиск'
        onChange={(e) => {
          setSearchInput(e.target.value);
          }}>
        </input>
        {searchInput !== '' &&
            <table className='users_table countLines' cellSpacing="5" cellPadding="10" border="1">
            <div>
              {noSearch}
            </div>
            <caption>Результаты поиска</caption>

            <thead>
              <tr>
                <th></th>
                <th>Имя</th>
                <th>Номер телефона</th>
                <th>Email</th>
                <th>Дата отправки данных</th>
              </tr>
            </thead>
        {filteredResults.map((r)=>
          {
          return (
          <>
            <tbody>
              <tr key={r._id}>
                <td></td>
                <td>{r.name}</td>
                <td>{r.phone}</td>
                <td style={{width: '30%'}}>{r.email}</td>
                <td> {new Date(r.created_at).toLocaleString("ru", options)} </td>
              </tr>
            </tbody>
            </>)
          })
        } 
        </table>
      }

        { searchInput === ''  &&
        <>
        
        <div className='sort_users_container'>
        <div className='sort_users_wrapper'>
          Показать:
          {users_sorted?.map((e) =>
            <span key={e.id} className='sort_users_item' onClick={() => setSortUsers(e.id)}>{e.id}</span>
          )}
        </div>
        </div>
      
        <table className='users_table countLines' cellSpacing="5" cellPadding="10" border="1">
          <caption>Данные пользователей</caption>
            <thead>
              <tr>
                <th></th>
                <th>Имя</th>
                <th>Номер телефона</th>
                <th>Email</th>
                <th>Дата отправки данных</th>
                <th></th>
              </tr>
            </thead>
          <tbody>
            { users?.map((el) => {
              return (
              
                  <tr key={el._id}>
                      <td style={{width: '5%'}}></td>
                      <td>{el.name}</td>
                      <td>{el.phone}</td>
                      <td style={{width: '30%'}}>{el.email}</td>
                      <td> {new Date(el.created_at).toLocaleString("ru", options)} </td>
                      <td onClick={()=>{deleteUserInfo(el._id)}} title='Удалить запись' className='delete-icon'><DeleteIcon></DeleteIcon></td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        </>
    }
      </div>
      )
      
      :
      
      (
      <div className='no_users'>
        <span  style={{fontSize: '32px', color: "rgb(236, 194, 95)"}}>Нет данных пользователей</span>
      </div>
      )
    }
    <div className='home_btn_wrapper'>
      <button
        className="home_btn"
        onClick={() => navigate("/")}
        >На главную
      </button>
    </div>
    </>
  )
}
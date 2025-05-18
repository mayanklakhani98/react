import React,{useState} from 'react'

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const styling={
        height:'40px',
        width:'200px',
        padding:'0 8px 0 8px',
        borderRadius:'20px'
    };
    console.log(search);
  return (
    <div style={{display: 'flex', justifyContent:'space-between', height:'60px', width:'325px'}
    } >
      <input type="text" 
      placeholder='qwerty'
      value={search}
      onClick={(e)=>setSearch(e.target.value)}
      style={styling}
      />
      
      <button style={{height:'45px', width:'100px'}} >
        Search
      </button>
    </div>
  )
}

export default SearchBar

import React, {useState} from 'react'

export default function Themeswitcher() {

    const [Dark,setDark]=useState(0)

    const handleswitch=()=>{
        setDark(!Dark)
    }

  return (
    <div>
      <h3 style={
        Dark ? {backgroundColor:'black',color:'white'}:{backgroundColor:'white',color:'black'}
       }>
        
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt soluta sint magni iste provident deleniti quos unde veritatis officia quia quas magnam enim ab autem sequi cupiditate, animi, necessitatibus, quasi ipsa ea? Corporis, itaque deleniti! Eum, facere! Illum eaque ab corrupti quibusdam, dignissimos, et qui rem vel consectetur deleniti impedit labore alias cupiditate totam amet consequatur quos tenetur, laboriosam ipsam error veritatis rerum repellat perspiciatis quaerat. Laboriosam recusandae nulla earum fugiat ipsa quisquam ratione quasi cumque dolore officiis accusamus nesciunt nisi asperiores, exercitationem et vero animi molestiae dolorem cum reprehenderit suscipit natus assumenda praesentium cupiditate. Voluptatum, sit corrupti? Itaque, quisquam.</h3>

      <button onClick={handleswitch}>{ Dark? 'switch to light':'switch to dark' }</button>
    </div>
  )
}


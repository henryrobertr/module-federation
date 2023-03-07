import React from 'react'

const Users = ({usersData}) => {
  return (
    usersData ? (
      usersData.map(({_id, name, about}) => (
       <div key={_id}>
        <h4>Name : {name}</h4>
        <article>{about}</article>
       </div>
      ))
    ) : (
      <p>Users not found</p>
    )
  )
}

Users.getInitialProps = async () => {
  console.log("getInitialProps")
  const res = await fetch('http://localhost:8080')
  const usersData = await res.json()
  return {usersData}
}

export default Users; 

/* export async function getStaticProps() {
  console.log("getStaticProps")
  const res = await fetch('http://localhost:8080')
  const usersData = await res.json()
  return {
    props: {
      usersData,
    },
  }
} */
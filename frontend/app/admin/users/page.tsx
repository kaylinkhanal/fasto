'use client'
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
const GET_USERS = gql`
  query GetUsers{  
  users{
    id
    name
  }
}
`;


function Dogs() {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      {data.users.map((item)=>{
        return (
          <div className="m-4 p-4 shadow-md" key={item.id}>  
            {item.name}
            </div>
        )
      })}
    </div>    
  );
}

export default Dogs















// - react developer intern


// : HTML basic
// : version control system
// : CSS/ tailwind CSS
// : Javascript
// : React js
// : Nextjs framework,
// : Client side form validation using yup 
// : Handling complex form logics using formik
// : UI: UI components, AI based UI component developemnt
// : REST API, frontend API integration
// : GraphQL basics, Apollo Client 




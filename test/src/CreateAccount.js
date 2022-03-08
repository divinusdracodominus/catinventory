import React from 'react';
import ReactDOM from 'react-dom';

function AccountInput (props) {
  return (
    <div id={props.id} className={props.className}>
      <form action="./createaccount.php" method="post">
        <p>This feature has not been implemented yet</p> 
      </form>
    </div>
  );
}

export default AccountInput;

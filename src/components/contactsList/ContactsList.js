import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/actionCreators';
import FilterInput from './FilterInput';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import animations from '../styles/animationElements.module.css';

const ContactsList = ({ contacts, searchResult, deleteContact }) => {
  return (
    <>
      {contacts.length > 1 && <FilterInput />}
      {searchResult.length !== 0 ? (
        <TransitionGroup component='ul'>
          {searchResult.map(({ name, number, id }) => (
            <CSSTransition
              key={id}
              classNames={animations}
              timeout={500}
              unmountOnExit
            >
              <li>
                <p>{name}:</p>
                <p>{number}</p>
                <button type='button' onClick={() => deleteContact(id)}>
                  x
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <TransitionGroup component='ul'>
          {contacts.map(({ name, number, id }) => (
            <CSSTransition
              key={id}
              classNames={animations}
              timeout={500}
              unmountOnExit
            >
              <li>
                <p>{name}: </p>
                <p>{number}</p>
                <button type='button' onClick={() => deleteContact(id)}>
                  x
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </>
  );
};

// searchResult.length !== 0 ? (
//   <>
//     <CSSTransition
//       in={searchResult.length > 1}
//       timeout={500}
//       classNames={animations}
//       unmountOnExit
//     >

//     </CSSTransition>
//     <TransitionGroup component='ul'>
//       {searchResult.map(({ name, number, id }) => (
//         <CSSTransition
//           key={id}
//           classNames={animations}
//           timeout={500}
//           unmountOnExit
//         >
//           <li>
//             <p>{name}:</p>
//             <p>{number}</p>
//             <button type='button' onClick={() => deleteContact(id)}>
//               x
//             </button>
//           </li>
//         </CSSTransition>
//       ))}
//     </TransitionGroup>
//   </>
// ) : (
//   contacts.length !== 0 && (
//     <>
//       <CSSTransition
//         in={contacts.length > 1}
//         timeout={500}
//         classNames={animations}
//         unmountOnExit
//       >
//         <FilterInput />
//       </CSSTransition>
// <TransitionGroup component='ul'>
//   {contacts.map(({ name, number, id }) => (
//     <CSSTransition
//       key={id}
//       classNames={animations}
//       timeout={500}
//       unmountOnExit
//     >
//       <li>
//         <p>{name}: </p>
//         <p>{number}</p>
//         <button type='button' onClick={() => deleteContact(id)}>
//           x
//         </button>
//       </li>
//     </CSSTransition>
//   ))}
// </TransitionGroup>
//     </>
//   )
// );

const mapStateToProps = state => ({
  contacts: state.contacts,
  searchResult: state.searchResult
});

export default connect(mapStateToProps, { deleteContact })(ContactsList);

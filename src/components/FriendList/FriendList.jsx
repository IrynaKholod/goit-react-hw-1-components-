// import css from './FriendList.module.css';
import {FriendListItem} from './FriendListItem/FriendListItem'
import PropTypes from 'prop-types';

export const Friends = ({ frends}) => {
    return (
    <ul>
        {frends.map(({id, isOnline, avatar, name}) => (<FriendListItem key = {id} isOnline = {isOnline } avatar ={avatar} name={name}> {id} </FriendListItem>))}
    </ul>)}

    Friends.propTypes = {
        friends: PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.number.isRequired,
                isOnline: PropTypes.bool.isRequired,
                avatar: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            })
        )
    }
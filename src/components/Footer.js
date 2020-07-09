import React from 'react'

const firstName = "Iulian-Danut";
const lastName = "Basa";
const currentDate = new Date();

const Footer = () =>
        <footer id="footer">
            <h2 id="author">Author: {`${firstName} ${lastName}`}</h2>
            <h2 id="date">Current date: {` ${currentDate.getHours() % 12}-${currentDate.getMonth()}-${currentDate.getFullYear()}`}</h2>
            <h2 id="time">Current time: {` ${currentDate.getHours()}:${currentDate.getMinutes()}`}</h2>
        </footer>
export default Footer
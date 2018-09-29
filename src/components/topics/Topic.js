import React from 'react';

export const Topic = ({ match }) => (
    <div>
        {match.params.topicId === "books" && 
        <h3>
            <a href="https://www.goodreads.com/author/list/1020792.Antoine_de_Saint_Exup_ry" target="blank">Check out some {match.params.topicId}</a>
        </h3>}
        {match.params.topicId === "history" &&
        <h3>
            <a href="https://www.thoughtco.com/the-borgias-infamous-family-of-renaissance-italy-1221656" target="blank">Learn from {match.params.topicId}</a>
        </h3>}
        {match.params.topicId === "geography" &&
        <h3>
            <a href="https://en.wikipedia.org/wiki/Auckland#Geography" target="blank">Get enchanted by {match.params.topicId}</a>
        </h3>}
    </div>
);

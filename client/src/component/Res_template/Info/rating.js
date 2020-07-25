import React from "react";
function getStar(value) {
    switch(value) {
        case 0: 
            return "/images/emptystar.png";
        case 5: 
            return "/images/halfstar.png";
        case 10: 
            return "/images/fullstar.png"; 
    }
}
function getStars(value) {
    switch(parseFloat(value)) {
        case 0.0: return [0, 0, 0, 0, 0];
        case 0.5: return [5, 0, 0, 0, 0];
        case 1.0: return [10, 0, 0, 0, 0];
        case 1.5: return [10, 5, 0, 0, 0];
        case 2.0: return [10, 10, 0, 0, 0];
        case 2.5: return [10, 10, 5, 0, 0];
        case 3.0: return [10, 10, 10, 0, 0];
        case 3.5: return [10, 10, 10, 5, 0];
        case 4.0: return [10, 10, 10, 10, 0];
        case 4.5: return [10, 10, 10, 10, 5];
        case 5.0: return [10, 10, 10, 10, 10];
    }
}
export default function Rating({value}) {
    if (value < 0.25) {
    return (
    <div> 
        {getStars(0).map((value) => (
            <img src = {getStar(value)} style = {{width: '4vh'}}/>
        ))
        }
    </div>
    ) }
    else if (value <0.75 && value >= 0.25) {
    return (
        <div> 
            {getStars(0.5).map((value) => (
                <img src = {getStar(value)} style = {{width: '4vh'}}/>
            ))
            }
        </div>
    ) }
    else if (0.75<=value && value < 1.25) {
        return (
            <div> 
                {getStars(1).map((value) => (
                    <img src = {getStar(value)} style = {{width: '4vh'}}/>
                ))
                }
            </div>
        ) }
    else if (1.25<=value && value < 1.75) {
        return (
            <div> 
                {getStars(1.5).map((value) => (
                    <img src = {getStar(value)} style = {{width: '4vh'}}/>
                ))
                }
            </div>
        ) }
    else if (1.75<=value && value < 2.25) {
        return (
            <div> 
                {getStars(2).map((value) => (
                    <img src = {getStar(value)} style = {{width: '4vh'}}/>
                ))
                }
            </div>
        ) }
    else if (2.25<=value && value < 2.75) {
        return (
            <div> 
                {getStars(2.5).map((value) => (
                    <img src = {getStar(value)} style = {{width: '4vh'}}/>
                ))
                }
            </div>
        ) }
    else if (2.75<=value && value < 3.25) {
        return (
            <div> 
                {getStars(3).map((value) => (
                    <img src = {getStar(value)} style = {{width: '4vh'}}/>
                ))
                }
            </div>
        ) }
    else if (3.25<=value && value < 3.75) {
        return (
            <div> 
                {getStars(3.5).map((value) => (
                    <img src = {getStar(value)} style = {{width: '4vh'}}/>
                ))
                }
            </div>
        ) }
    else if (3.75<=value && value < 4.25) {
        return (
            <div> 
                {getStars(4).map((value) => (
                    <img src = {getStar(value)} style = {{width: '4vh'}}/>
                ))
                }
            </div>
        ) }
    else if (4.25<=value && value < 4.75) {
        return (
            <div> 
                {getStars(4.5).map((value) => (
                    <img src = {getStar(value)} style = {{width: '4vh'}}/>
                ))
                }
            </div>
        ) }
    else if (4.75<=value && value <= 5) {
        return (
            <div> 
                {getStars(5).map((value) => (
                    <img src = {getStar(value)} style = {{width: '4vh'}}/>
                ))
                }
            </div>
        ) }
}
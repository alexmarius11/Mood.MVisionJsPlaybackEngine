/*
 * Copyright (c) 2015 Samsung Electronics Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
    /**
     * RETURN_BUTTON - return button key code
     * SELECT_BUTTON - select button key code
     * LEFT_ARROW_BUTTON - select button key code
     * UP_ARROW_BUTTON - select button key code
     * RIGHT_ARROW_BUTTON - select button key code
     * DOWN_ARROW_BUTTON - select button key code
     * logoContainer - DIV containing Tizen logo elements.
     * moveTopLimit - limit when moving logo container up.
     * moveBottomLimit - limit when moving logo container down.
     * moveLeftLimit - limit when moving logo container left.
     * moveRightLimit - limit when moving logo container right.
     * moveRate - rate for moving logo container.
     * moveEventHandler - handler for time out.
     */
    var RETURN_BUTTON = 10009,
        SELECT_BUTTON = 13,
        LEFT_ARROW_BUTTON = 37,
        UP_ARROW_BUTTON = 38,
        RIGHT_ARROW_BUTTON = 39,
        DOWN_ARROW_BUTTON = 40,
        logoContainer = document.querySelector(".logo-container"),
        moveTopLimit,
        moveBottomLimit,
        moveLeftLimit,
        moveRightLimit,
        moveRate = 1,
        moveEventHandler;

    /**
     * Resets Tizen logo element.
     * @private
     * @param {string} direction - moving direction.
     */
    function resetLogo() {
        var texts = document.querySelectorAll(".text"),
            logo = document.querySelector(".wheel"),
            i;

        for (i = 0; i < texts.length; i++) {
            texts[i].classList.remove("text");
        }
        logo.classList.remove("wheel");

        setTimeout(function() {
            for (i = 0; i < texts.length; i++) {
                texts[i].classList.add("text");
            }
            logo.classList.add("wheel");
            logoContainer.style.margin = "";
        }, 1);

    }

    /**
     * Moves Tizen logo element.
     * @private
     * @param {string} keyCode - event key code.
     */
    function moveLogo(keyCode) {
        /**
         * containerStyle - getComputedStyle() gives the values of all the CSS properties.
         * containerMarginTop - logo container's marginTop.
         * containerMarginLeft - logo container's marginLeft.
         */
        var containerStyle = window.getComputedStyle(logoContainer, null),
            containerMarginTop = parseInt(containerStyle.marginTop.replace("px", "")),
            containerMarginLeft = parseInt(containerStyle.marginLeft.replace("px", "")),
            margin;

        if (keyCode === LEFT_ARROW_BUTTON) {
            margin = containerMarginLeft - 10 * moveRate;
            margin = margin < moveLeftLimit ? moveLeftLimit : margin;
            logoContainer.style.marginLeft = margin + "px";
        } else if (keyCode === UP_ARROW_BUTTON) {
            margin = containerMarginTop - 10 * moveRate;
            margin = margin < moveTopLimit ? moveTopLimit : margin;
            logoContainer.style.marginTop = margin + "px";

        } else if (keyCode === RIGHT_ARROW_BUTTON) {
            margin = containerMarginLeft + 10 * moveRate;
            margin = margin > moveRightLimit ? moveRightLimit : margin;
            logoContainer.style.marginLeft = margin + "px";

        } else if (keyCode === DOWN_ARROW_BUTTON) {
            margin = containerMarginTop + 10 * moveRate;
            margin = margin > moveBottomLimit ? moveBottomLimit : margin;
            logoContainer.style.marginTop = margin + "px";
        }

        // When button long press, change move rate.
        moveRate *= 1.2;
        // Clears previous timeout event.
        clearTimeout(moveEventHandler);
        // Resets move rate after 300ms.
        moveEventHandler = setTimeout(function() {
            moveRate = 1;
        }, 300);
    }

    /**
     * TV controller key event handler.
     * @private
     * @param {object} e - event object.
     */
    function keyEventHandler(e) {
        if (e.keyCode === RETURN_BUTTON) {
            tizen.application.getCurrentApplication().exit();
        } else if (e.keyCode === SELECT_BUTTON) {
            resetLogo();
        } else {
            moveLogo(e.keyCode);
        }
    }

    /**
     * Binds Default Events.
     * @private
     */
    function bindDefaultEvents() {
        document.addEventListener('keydown', keyEventHandler);
    }

    /**
     * Sets move limit.
     * @private
     */
    function setMoveLimit() {
        var containerStyle = window.getComputedStyle(logoContainer, null),
            containerWidth = parseInt(containerStyle.width.replace("px", "")),
            containerHeight = parseInt(containerStyle.height.replace("px", ""));

        moveLeftLimit = -(window.innerWidth / 2);
        moveRightLimit = (window.innerWidth / 2) - containerWidth;
        moveTopLimit = -(window.innerHeight / 2);
        moveBottomLimit = (window.innerHeight / 2) - containerHeight;
    }

    /**
     * Initiates the application.
     * @private
     */
    function init() {
        bindDefaultEvents();
        setMoveLimit();
    }

    window.onload = init;
}());
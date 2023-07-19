import { API, broadcast } from "./util";


export default class FollowToggle {
    constructor(toggleButton) {
        this.toggleButton = toggleButton;
        toggleButton.addEventListener('click', this.handleClick.bind(this));
        
    }

    async handleClick(event) {
        event.preventDefault();
        if (this.followState === 'followed') {
            this.followState = 'unfollowed';
        } else {
            this.followState ='followed';
        }
        console.log(this.followState);
    }

    async follow() {
        // Your code here
    }

    async unfollow() {
        // Your code here
    }

    render() {
        switch (this.followState) {
        // Your code here
        }
    }

    get followState() {
        return this.toggleButton.dataset.followState;
    }

    set followState(newState) {
        this.toggleButton.dataset.followState = newState;
        this.render();
    }
}

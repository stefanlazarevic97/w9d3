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
            this.unfollow();
        } else {
            this.followState ='followed';
            this.follow();
        }
    }

    async follow() {
        const user = this.toggleButton.dataset.userId;
        this.followState = 'following';

        try {
            await API.followUser(user);
            this.followState = 'followed';
        } catch (error) {
            console.error('Failed to follow user:', error);
        }
    }

    async unfollow() {
        const user = this.toggleButton.dataset.userId;
        this.followState = 'unfollowing';

        try {
            await API.unfollowUser(user);
            this.followState = 'unfollowed';
        } catch (error) {
            console.error('Failed to unfollow user:', error);
        }
    }

    render() {
        switch (this.followState) {
            case 'followed':
                this.toggleButton.disabled = false;
                this.toggleButton.innerHTML = "Unfollow!";
                break;
            case 'unfollowed':
                this.toggleButton.disabled = false;
                this.toggleButton.innerHTML = "Follow!";
                break;
            case 'following':
                this.toggleButton.disabled = true;
                this.toggleButton.innerHTML = "Following...";
                break;
            case 'unfollowing':
                this.toggleButton.disabled = true;
                this.toggleButton.innerHTML = "Unfollowing...";
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

//

// import { followUser, unfollowUser } from './api';  // Assuming these are the correct imports

// export default class FollowToggle {
//     constructor(toggleButton) {
//         this.toggleButton = toggleButton;
//         this.userId = toggleButton.dataset.userId;
//         toggleButton.addEventListener('click', this.handleClick.bind(this));
//     }

//     async handleClick(event) {
//         event.preventDefault();
//         if (this.followState === 'followed') {
//             this.unfollow();
//         } else {
//             this.follow();
//         }
//     }

//     async follow() {
//         this.followState = 'following';
//         try {
//             await followUser(this.userId);
//             this.followState = 'followed';
//         } catch (error) {
//             console.error('Failed to follow user:', error);
//         }
//     }

//     async unfollow() {
//         this.followState = 'unfollowing';
//         try {
//             await unfollowUser(this.userId);
//             this.followState = 'unfollowed';
//         } catch (error) {
//             console.error('Failed to unfollow user:', error);
//         }
//     }

//     render() {
//         switch (this.followState) {
//             case 'followed':
//                 this.toggleButton.disabled = false;
//                 this.toggleButton.innerText = "Unfollow!";
//                 break;
//             case 'unfollowed':
//                 this.toggleButton.disabled = false;
//                 this.toggleButton.innerText = "Follow!";
//                 break;
//             case 'following':
//                 this.toggleButton.disabled = true;
//                 this.toggleButton.innerText = "Following...";
//                 break;
//             case 'unfollowing':
//                 this.toggleButton.disabled = true;
//                 this.toggleButton.innerText = "Unfollowing...";
//                 break;
//         }
//     }

//     get followState() {
//         return this.toggleButton.dataset.followState;
//     }

//     set followState(newState) {
//         this.toggleButton.dataset.followState = newState;
//         this.render();
//     }
// }

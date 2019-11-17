var TaskManager = new Vue({
    el: '#app',
    data: {
        urgList : [
            {
                text: 'to buy red shoes'
            },
            {
                text: 'to make a cake'
            },
            {
                text: 'to send invitations'
            },
            {
                text: 'book the restaurant'
            },
            {
                text: 'call to photographer'
            }  
        ],          
        waitList : [
            {
                text: 'call to Tommy mother'
            },
            {
                text: 'book a clown'
            },
            {
                text:  'buy a car'
            },
            {
                text: 'paint walls'
            }        
        ]
    },
    methods: {
        transferToWait : function() {
            if(!TaskManager.urgList.length) return;
            TaskManager.urgList.pop();
            TaskManager.waitList.unshift(TaskManager.urgList[TaskManager.urgList.length - 1]);
            console.log(TaskManager.urgList[TaskManager.urgList.length - 1]);
        },
        transferToUrgent : function() {
            if(!TaskManager.waitList.length) return;
            TaskManager.urgList.unshift(TaskManager.waitList.pop());
        }
    }
});
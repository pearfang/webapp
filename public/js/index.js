// 主页内容渲染
!function(){

   var windowWidth = $(window).width();
   if(windowWidth<320){
        windowWidth = 320;
   }
   var offset = $($('.Swipe-tab').find('a')[0]).offset();
   var index_header_tab_width = offset.width;
   new Vue({
        el:'#app',
        data :{
           screen_width:windowWidth,
           double_screen_width:windowWidth*2,
           index_header_tab_width:index_header_tab_width,
           top:[],
           hot:[],
           recommend:[],
           female:[],
           male:[],
           free:[],
           topic:[],
           duration:0,
           position:0,
           header_position:0,
           header_duration:0,
           tab_1_class:'Swipe-tab__on',
           tab_2_class:''
        },
        created(){
            var self = this;
            $.get('/ajax/index',function(d){
               self.top = d.items[0].data.data;
               self.hot = d.items[1].data.data;
               self.recommend = d.items[2].data.data;
               self.female = d.items[3].data.data;
               self.male = d.items[4].data.data;
               self.free = d.items[5].data.data;
               self.topic = d.items[6].data.data
            },'json');
        },
        methods:{
         tabSwitch:function(pos){
            this.duration = 0.5;
            this.header_duration = 0.5;
            if(pos == 0){
               this.position = 0;
               this.header_position = 0;
               this.tab_1_class = "Swipe-tab__on";
               this.tab_2_class = "";
            }else{
               this.position = (-windowWidth);
               this.header_position = index_header_tab_width;
               this.tab_2_class = "Swipe-tab__on";
               this.tab_1_class = "";
            }
         }
        }
   })
}();
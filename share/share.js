var nowdate = new Date;
	var nowyear=nowdate.getFullYear();		
	
		
	$.ajax({
		type:"get",
		url:"https://www.3721.us/hisSearch/"+nowyear+".json",
		async:false,
// 		dataType: "jsonp",
//      jsonp: "callback",
//      jsonpCallback:"flightHandler",
		success: function(info){			
			console.log(info);
			var temp = '',lastkey='';
			for(var keyname in info){          	
            	temp += '<li>'+keyname+'</li>' 
            	lastkey=keyname;
            }
			$(".datanum ul").append(temp);
			
			$(".datanum ul li").click(function(){
				var keys = $(this).html();
				var ball_1 = info[keys].ball_1;
			var ball_2 = info[keys].ball_2;
			var ball_3 = info[keys].ball_3;
			var ball_4 = info[keys].ball_4;
			var ball_5 = info[keys].ball_5;
			var ball_6 = info[keys].ball_6;
			var ball_special = info[keys].ball_special;
			var period = info[keys].term_sub_number;
			
			function shengxiao(sx_ball,sxclass){
				var shengxiaodata = ["","鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"];
				for(var i=1;i<shengxiaodata.length;i++){
					if(sx_ball==(i)){
						sxclass=shengxiaodata[i];
					}
				}
				return sxclass;
			}
			var shengxiao_b1=shengxiao(info[keys].ball_1_shengxiao,shengxiao_b1);
			var shengxiao_b2=shengxiao(info[keys].ball_2_shengxiao,shengxiao_b2);
			var shengxiao_b3=shengxiao(info[keys].ball_3_shengxiao,shengxiao_b3);
			var shengxiao_b4=shengxiao(info[keys].ball_4_shengxiao,shengxiao_b4);
			var shengxiao_b5=shengxiao(info[keys].ball_5_shengxiao,shengxiao_b5);
			var shengxiao_b6=shengxiao(info[keys].ball_6_shengxiao,shengxiao_b6);			
			var shengxiao=shengxiao(info[keys].ball_special_shengxiao,shengxiao);
			
			
			
								
			function wxw(wx_ball,wxclass){
				var wxdata = ["","金","木","水","火","土"];
				for(var i=1;i<wxdata.length;i++){
					if(wx_ball==(i)){
						wxclass=wxdata[i];
					}
				}
				return wxclass;
			}
			var wx_b1=wxw(info[keys].wx_b1,wx_b1);
			var wx_b2=wxw(info[keys].wx_b2,wx_b2);
			var wx_b3=wxw(info[keys].wx_b3,wx_b3);
			var wx_b4=wxw(info[keys].wx_b4,wx_b4);
			var wx_b5=wxw(info[keys].wx_b5,wx_b5);
			var wx_b6=wxw(info[keys].wx_b6,wx_b6);			
			var wx=wxw(info[keys].wx,wx);
			
			function sxfun(sxs_ball,sxsclass){
				var bsdata = ["","red","blue","green"];
				for(var i=1;i<bsdata.length;i++){
					if(sxs_ball==(i)){
						sxsclass=bsdata[i];
					}
				}
				return sxsclass;
			}
			
			var bs = sxfun(info[keys].bs,bs);
			var bs_b1 = sxfun(info[keys].bs_b1,bs_b1);
			var bs_b2 = sxfun(info[keys].bs_b2,bs_b2);
			var bs_b3 = sxfun(info[keys].bs_b3,bs_b3);
			var bs_b4 = sxfun(info[keys].bs_b4,bs_b4);
			var bs_b5 = sxfun(info[keys].bs_b5,bs_b5);
			var bs_b6 = sxfun(info[keys].bs_b6,bs_b6);
			
			var urls =  '?period='+period+'&numbers='+ball_1+','+ball_2+','+ball_3+','+ball_4+','+ball_5+','+ball_6+','+ball_special+'&bs='+bs_b1+','+bs_b2+','+bs_b3+','+bs_b4+','+bs_b5+','+bs_b6+','+bs+'&sx='+shengxiao_b1+','+shengxiao_b2+','+shengxiao_b3+','+shengxiao_b4+','+shengxiao_b5+','+shengxiao_b6+','+shengxiao+'&wx='+wx_b1+','+wx_b2+','+wx_b3+','+wx_b4+','+wx_b5+','+wx_b6+','+wx;
			$("#frame").attr("src","http://cdn.a3721.us/indexkj.html"+urls);
			})				
		},
		error: function(msg){
			console.log(msg);
		}
	
	});
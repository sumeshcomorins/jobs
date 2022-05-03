<?php
include './db_config.php';


if($_REQUEST['request']=='registerJobUser'){
    $data = json_decode(file_get_contents('php://input'), true);
    $user_name=$data["username"];
    $user_pass=$data["password"];
    $user_email=$data["email"];
    $user_phone=$data["phone"];
    $user_gender=$data["gender"];
    $user_workStatus=$data["workStatus"];
    $user_jobCategory=$data["jobCategory"];
    $insertJobsDetails = "INSERT INTO `user` (`name`, `email`, `password`,`phone`, `gender`, `workstatus`, `jobcategory`) VALUES ('$user_name', '$user_email', '$user_pass','$user_phone', '$user_gender', '$user_workStatus','$user_jobCategory')";
    $qry = mysqli_query($con, $insertJobsDetails);
        if($qry){
           $response['status']=true;
           $response['message']='Register successfully';
       }else{
        $response['status']=false;
        $response['message']='Register failed';
       }

 echo json_encode($response);
}

if($_REQUEST['request']=='collectRecords'){
    $data = json_decode(file_get_contents('php://input'), true);
    $sql = "SELECT * FROM `user`";

$result = mysqli_query($con,$sql);
if (mysqli_num_rows($result) > 0){
    $i = 0;
    while($val = mysqli_fetch_assoc($result)){
        $jobsRecord[$i]['id'] = $val['id'];
        $jobsRecord[$i]['name'] = $val['name'];
        $jobsRecord[$i]['email'] = $val['email'];
        $jobsRecord[$i]['phone'] = $val['phone'];
        $jobsRecord[$i]['gender'] = $val['gender'];
        $jobsRecord[$i]['workstatus'] = $val['workstatus'];
        $jobsRecord[$i]['jobcategory'] = $val['jobcategory'];
        $i = $i+1;
      }
      $response['status']=true;
      $response['message']='success';
      $response['records']=$jobsRecord;
}else{
    $response['status']=false;
    $response['message']='failed';
    $response['records']=[];
}
// $datas = [];
// while($get = mysqli_fetch_assoc($result)){
//     $datas[] = $get;
//   }
echo json_encode($response);
}



?>
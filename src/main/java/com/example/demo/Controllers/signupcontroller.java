package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.signupmodel;
import com.example.demo.Repository.SignupRepository;

@RestController
@CrossOrigin("http://localhost:3000 ")
@RequestMapping("/requestsignup")
public class signupcontroller {
    @Autowired
    //posting the data only
    /*SignupRepository signuprepo;
    @PostMapping("/postsignupdata")
    signupmodel post(@RequestBody signupmodel data) {
    	return signuprepo.save(data);
    }
    */
    //signup to check whether the user is already exists or not post the data to database
    SignupRepository sr;
    @PostMapping("/signupdata")
    public String sign(@RequestBody signupmodel d)
    {
    	String user=d.getMailid();
    	signupmodel m2=sr.findByMailid(user);
    	 if(m2==null)
    	 {
    		 sr.save(d);
    		 return "added";
    	 }
    	 else {
    		 return "User Already Exists";
    	 }
    	
    }
    
    //login 
    @PostMapping("logindata/{mailid}/{password}")
    public String login(@PathVariable String mailid,@PathVariable String password)
    {
    	signupmodel m3=sr.findByMailid(mailid);
    	if(m3==null)
    	{
    		return "Invalid Email";
    	}
    	else {
    		if(m3.getPassword().equals(password)) {
    			return "Success";
    		}
    		else {
    			return "Invalid Password";
    		}
    	}
    }
    
    
    
}

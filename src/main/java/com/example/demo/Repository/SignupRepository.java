package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.signupmodel;

public interface SignupRepository extends JpaRepository <signupmodel,Integer>{

	signupmodel findByMailid(String user);
     
}

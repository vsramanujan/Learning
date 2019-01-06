#include<stdio.h>
#include<iostream>
#include<vector>
#define ll long long
using namespace std;


ll func(ll input, ll *arr) {
  if(input==0 || input ==1) {
    return input;
  }
  if(arr[input]!=0) {
    return arr[input];
  }
  arr[input] = max(input,func(input/3,arr)+func(input/2,arr)+func(input/4,arr));
  return arr[input];
}

int main() {
  ll input;
  while(cin>>input) {
    ll *arr= new ll[input+1];
    cout<<func(input,arr);
  }
}
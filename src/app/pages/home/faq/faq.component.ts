import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

   accordion_array = [
    {
      expand:false,
       title: 'What is your return policy?',
       descriptin: 'You can return any unused product within 30 days of purchase for a full refund. Just ensure the product is in its original packaging.', 
       icon: 'fas fa-plus' },
    { 
      expand:false,
      title: 'How long does shipping take?',
      descriptin: 'Standard shipping typically takes 3-5 business days, while express shipping takes 1-2 business days. International orders may take up to 10 business days.',
      icon: 'fas fa-plus' 
    },
    { 
    expand:false,
    title: 'How can I track my order?',
    descriptin: 'After your order has been shipped, you will receive an email with a tracking link. You can also track your order directly using your order number and email address.',
    icon: 'fas fa-plus' },
    { 
      expand:false,
      title: 'What payment methods do you accept?',
       descriptin: 'We accept all major credit cards, including Visa, MasterCard, and American Express, as well as PayPal and Apple Pay.',
       icon: 'fas fa-plus' },
    { 
      expand:false,
      title: 'Do you offer discounts for bulk orders?', 
      descriptin: 'Yes, we offer special pricing and discounts for bulk purchases. Please contact our sales team for a custom quote based on the quantity and product type.',
      icon: 'fas fa-plus' },
    { 
      expand:false,
      title: 'Can I change my shipping address?',
      descriptin: 'Yes, you can change your shipping address before your order is shipped. Please contact our customer support team as soon as possible to update your details.',
      icon: 'fas fa-plus' },
    { 
      expand:false,
      title: 'How do I cancel my order?',
      descriptin: 'If your order has not been shipped, you can cancel it by contacting our customer support. If the order is already shipped, you can return it once received.',
      icon: 'fas fa-plus' },
  ];


  collapse(id:number){
    this.accordion_array[id].expand =  !this.accordion_array[id].expand;
    this.accordion_array.forEach((item,i)=>{
      if(i!== id){
        item.expand = false;
      }
    })
  }
  

}

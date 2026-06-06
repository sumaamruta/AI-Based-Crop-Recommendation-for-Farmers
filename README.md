Overview

An AI-powered agriculture platform that recommends suitable crops based on soil nutrients and environmental conditions. The system uses machine learning models such as MLP, TabTransformer, and TabNet to predict crops and provides real-time market analysis using mandi price data.

Features
Crop recommendation based on N, P, K, temperature, humidity, pH, and rainfall
Market price analysis using Data.gov.in API
7-Day Price Trend Visualization
6-Month Price Comparison
User Authentication System
Interactive Dashboard

Technology Stack
Frontend: React.js, JavaScript, Tailwind CSS
Backend: FastAPI, Python
Machine Learning: PyTorch, Scikit-learn, TabNet, TabTransformer
Database: SQLite

Installation
Backend
pip install -r requirements.txt
uvicorn main:app --reload

Frontend
cd frontend
npm install
npm start

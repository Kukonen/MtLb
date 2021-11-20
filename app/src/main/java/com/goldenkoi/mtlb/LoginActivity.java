package com.goldenkoi.mtlb;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

public class LoginActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        addListenerOnButtonOfLogin();
    }

    private void addListenerOnButtonOfLogin() {
        TextView continue_without_acc = findViewById(R.id.continue_without_acc);

        continue_without_acc.setOnClickListener(
                view -> {
                    Intent intent = new Intent(this, MainActivity.class);
                    startActivity(intent);
                }
        );
    }
}
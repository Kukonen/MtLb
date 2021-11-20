package com.goldenkoi.mtlb;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        addListenerOnButtonOfToolbar();
    }

    private void addListenerOnButtonOfToolbar() {
        ImageView login = findViewById(R.id.login);
        ImageView all_projects = findViewById(R.id.all_projects);

        login.setOnClickListener(
                view -> {
                    Intent intent = new Intent(this, LoginActivity.class);
                    startActivity(intent);
                }
        );

        all_projects.setOnClickListener(
                view -> {
                    Intent intent = new Intent(this, AllProjectsActivity.class);
                    startActivity(intent);
                }
        );
    }
}
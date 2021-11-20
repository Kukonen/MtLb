package com.goldenkoi.mtlb;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ImageView;

public class AllProjectsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_all_projects);
        addListenerOnButtonOfToolbar();
    }

    private void addListenerOnButtonOfToolbar() {
        ImageView login = findViewById(R.id.login);
        ImageView current_project = findViewById(R.id.current_project);

        login.setOnClickListener(
                view -> {
                    Intent intent = new Intent(this, LoginActivity.class);
                    startActivity(intent);
                }
        );

        current_project.setOnClickListener(
                view -> {
                    Intent intent = new Intent(this, MainActivity.class);
                    startActivity(intent);
                }
        );
    }
}